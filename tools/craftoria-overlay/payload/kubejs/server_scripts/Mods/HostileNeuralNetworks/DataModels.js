/**
 * @typedef {Object} DataModel
 * @property {Special.EntityType[]} variants
 * @property {string} [nameColor]
 * @property {Object} [display]
 * @property {number} [display.scale]
 * @property {number} [display.y_offset]
 * @property {number} simCost
 * @property {Special.Item} baseDrop
 * @property {($ItemStack_|Special.ItemTag)[]} fabricatorDrops
 * @property {Object} tierData
 * @property {number} [tierData.faulty]
 * @property {number} [tierData.basic]
 * @property {number} [tierData.advanced]
 * @property {number} [tierData.superior]
 * @property {number} [tierData.self_aware]
 * @property {Object} dataPerKill
 * @property {number} [dataPerKill.faulty]
 * @property {number} [dataPerKill.basic]
 * @property {number} [dataPerKill.advanced]
 * @property {number} [dataPerKill.superior]
 * @property {number} [dataPerKill.self_aware]
 */

/**
 * Helper function to generate model data for Hostile Neural Networks
 * @param {Special.EntityType} entityId
 * @param {DataModel} data
 */
function generateModelData(entityId, data) {
  let { namespace, path: entityName } = ID.mc(entityId);

  let outputPath =
    namespace === 'minecraft' ? `hostilenetworks:data_models/${entityName}` : `hostilenetworks:data_models/${namespace}/${entityName}`;

  let drops = [];

  data.fabricatorDrops.forEach(drop => {
    if (drop.includes('#')) {
      Ingredient.of(drop)
        .except('#almostunified:hide')
        .itemIds.forEach(drop => {
          if (drop === 'minecraft:barrier') {
            logWarn(`Skipping ${entityId} drop entry because it is a barrier`);
            return;
          }
          drops.push(Item.of(drop).toJson());
        });
    } else {
      drops.push(Item.of(drop).toJson());
    }
  });

  let modelJson = {
    'neoforge:conditions': [{ type: 'neoforge:mod_loaded', modid: namespace }],
    entity: entityId,
    variants: [],
    name: {
      translate: `entity.${namespace}.${entityName}`,
      color: data.nameColor ?? '#55FF55',
    },
    display: data.display ?? {},
    sim_cost: data.simCost,
    input: Ingredient.of(data.input ?? 'hostilenetworks:prediction_matrix').toJson(),
    base_drop: {
      id: data.baseDrop,
      count: 1,
    },
    trivia: `hostilenetworks.trivia.${entityName}`,
    fabricator_drops: drops,
  };

  if (data.tierData) modelJson.tier_data = data.tierData;
  if (data.dataPerKill) modelJson.data_per_kill = data.dataPerKill;

  return { outputPath: outputPath, modelJson: modelJson };
}

let globalDataModels = {};
let globalDisabledDataModels = [];

ServerEvents.generateData('after_mods', event => {
  // HNN is kept for renewable common mob drops. Bosses, unique mobs, and
  // one-off rewards stay tied to their original encounters.
  const disabledDataModels = [
    'hostilenetworks:data_models/artifacts/mimic',
    'hostilenetworks:data_models/allthemodium/piglich',
    'hostilenetworks:data_models/elder_guardian',
    'hostilenetworks:data_models/ender_dragon',
    'hostilenetworks:data_models/warden',
    'hostilenetworks:data_models/wither',
    'hostilenetworks:data_models/twilightforest/alpha_yeti',
    'hostilenetworks:data_models/twilightforest/hydra',
    'hostilenetworks:data_models/twilightforest/lich',
    'hostilenetworks:data_models/twilightforest/minoshroom',
    'hostilenetworks:data_models/twilightforest/naga',
    'hostilenetworks:data_models/twilightforest/snow_queen',
    'hostilenetworks:data_models/twilightforest/ur_ghast',
    'hostilenetworks:data_models/irons_spellbooks/citadel_keeper',
    'hostilenetworks:data_models/irons_spellbooks/dead_king',
  ];

  globalDisabledDataModels = disabledDataModels.map(outputPath =>
    outputPath.replace('data_models/', '')
  );

  disabledDataModels.forEach(outputPath => {
    event.json(outputPath, {
      'neoforge:conditions': [{ type: 'neoforge:false' }],
      'craftoria:disabled': true,
    });
  });

  /** @type {Record<Special.EntityType, DataModel>} */
  const dataModels = {};

  globalDataModels = dataModels;

  for (let [entityId, modelData] of Object.entries(dataModels)) {
    let { outputPath, modelJson } = generateModelData(entityId, modelData);

    if (modelJson.fabricator_drops.length === 0) {
      // TODO: Remove this once we have a better way to handle this
      // Currently mimic errors as tags load too late for this on first load, but works *after* a reload.
      logWarn(`Skipping ${entityId} because it has no fabricator drops`);
      continue;
    }

    event.json(outputPath, modelJson);
  }
});
