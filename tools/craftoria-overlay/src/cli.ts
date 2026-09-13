import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { exportOverlay } from './export-overlay.js';
import { exportClientOverlay } from './export-client.js';
import { exportLolipopServer } from './export-lolipop.js';
import { capturePayload, captureProbeTypings, diffPayload, syncPayload } from './dev-overlay.js';
import { installDevSkills } from './install-dev-skills.js';
import { installOverlay } from './install-overlay.js';
import { errorMessage } from './lib.js';
import { newCraftoriaServer } from './new-server.js';

async function main(): Promise<void> {
  await yargs(hideBin(process.argv))
    .scriptName('craftoria-overlay')
    .usage('$0 <command> [options]')
    .command(
      'export',
      'Git管理されたpayloadから配布ZIPを作成します',
      (command) => command
        .option('source-instance', {
          type: 'string',
          description: '検証に使うCraftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('output', {
          type: 'string',
          description: '出力するZIPファイル',
          normalize: true,
        }),
      async (arguments_) => {
        await exportOverlay({
          ...(arguments_.sourceInstance === undefined ? {} : { sourceInstance: arguments_.sourceInstance }),
          ...(arguments_.output === undefined ? {} : { output: arguments_.output }),
        });
      },
    )
    .command(
      'export-client',
      'Node.js不要のクライアント配布ZIPを作成します',
      (command) => command
        .option('source-instance', {
          type: 'string',
          description: '検証に使うCraftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('output', {
          type: 'string',
          description: '出力するクライアントZIPファイル',
          normalize: true,
        }),
      async (arguments_) => {
        await exportClientOverlay({
          ...(arguments_.sourceInstance === undefined ? {} : { sourceInstance: arguments_.sourceInstance }),
          ...(arguments_.output === undefined ? {} : { output: arguments_.output }),
        });
      },
    )
    .command(
      'export-lolipop',
      'ロリポップ！for GamersのWebGUI管理NeoForgeへ重ねるパッチZIPを作成します',
      (command) => command
        .option('server', {
          type: 'string',
          demandOption: true,
          description: '公式ベース導入とオーバーレイ適用が完了したサーバーディレクトリ',
          normalize: true,
        })
        .option('output', {
          type: 'string',
          description: '出力するロリポップ向けZIPファイル',
          normalize: true,
        }),
      async (arguments_) => {
        await exportLolipopServer({
          serverPath: arguments_.server,
          ...(arguments_.output === undefined ? {} : { output: arguments_.output }),
        });
      },
    )
    .command(
      'sync',
      'Git管理されたpayloadを開発用Craftoriaインスタンスへ同期します',
      (command) => command
        .option('instance', {
          type: 'string',
          description: '同期先Craftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更せず同期計画だけを表示します',
        })
        .option('force-conflict', {
          type: 'boolean',
          default: false,
          description: '確認済みの競合ファイルを強制的に置換します',
        }),
      async (arguments_) => {
        await syncPayload({
          ...(arguments_.instance === undefined ? {} : { instancePath: arguments_.instance }),
          dryRun: arguments_.dryRun,
          forceConflict: arguments_.forceConflict,
        });
      },
    )
    .command(
      'diff',
      'payloadと開発用Craftoriaインスタンスの差分を表示します',
      (command) => command.option('instance', {
        type: 'string',
        description: '比較先Craftoriaゲームディレクトリまたはランチャーのインスタンス',
        normalize: true,
      }),
      async (arguments_) => {
        await diffPayload({
          ...(arguments_.instance === undefined ? {} : { instancePath: arguments_.instance }),
        });
      },
    )
    .command(
      'capture <paths..>',
      '指定したライブファイルだけをGit管理対象のpayloadへ取り込みます',
      (command) => command
        .positional('paths', {
          type: 'string',
          array: true,
          demandOption: true,
          description: 'minecraft/からの相対ファイルパス',
        })
        .option('instance', {
          type: 'string',
          description: '取込元Craftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('force', {
          type: 'boolean',
          default: false,
          description: '確認済みのpayloadファイルを上書きします',
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更せず取込計画だけを表示します',
        }),
      async (arguments_) => {
        await capturePayload({
          paths: arguments_.paths,
          ...(arguments_.instance === undefined ? {} : { instancePath: arguments_.instance }),
          force: arguments_.force,
          dryRun: arguments_.dryRun,
        });
      },
    )
    .command(
      'capture-typings',
      'ProbeJS 8の生成型を選別してpayload/kubejs/probeへ取り込みます',
      (command) => command
        .option('instance', {
          type: 'string',
          description: '取込元Craftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更せず取込対象と件数だけを表示します',
        }),
      async (arguments_) => {
        await captureProbeTypings({
          ...(arguments_.instance === undefined ? {} : { instancePath: arguments_.instance }),
          dryRun: arguments_.dryRun,
        });
      },
    )
    .command(
      'install-dev-skills',
      '固定済みのMinecraft開発Skillをワークスペースへ導入します',
      (command) => command
        .option('workspace', {
          type: 'string',
          description: '導入先ワークスペース（既定: このCraftoriaインスタンス）',
          normalize: true,
        })
        .option('include-noncommercial', {
          type: 'boolean',
          default: false,
          description: '非商用利用に限りmc-develop-firstと固定版MCPも導入します',
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更やダウンロードをせず導入計画だけを表示します',
        }),
      async (arguments_) => {
        await installDevSkills({
          ...(arguments_.workspace === undefined ? {} : { workspacePath: arguments_.workspace }),
          includeNoncommercial: arguments_.includeNoncommercial,
          dryRun: arguments_.dryRun,
        });
      },
    )
    .command(
      'install',
      '配布オーバーレイをクライアントまたはサーバーへ適用します',
      (command) => command
        .option('instance', {
          type: 'string',
          description: '対象のCraftoriaゲームディレクトリまたはランチャーのインスタンス',
          normalize: true,
        })
        .option('server', {
          type: 'string',
          description: '対象のCraftoriaサーバーディレクトリ',
          normalize: true,
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更せず適用計画だけを表示します',
        })
        .option('force-conflict', {
          type: 'boolean',
          default: false,
          description: '確認済みの競合ファイルを強制的に置換します',
        })
        .conflicts('instance', 'server')
        .check((arguments_) => {
          if (arguments_.instance === undefined && arguments_.server === undefined) {
            throw new Error('--instance または --server のどちらか一方を指定してください。');
          }
          return true;
        }),
      async (arguments_) => {
        await installOverlay({
          ...(arguments_.instance === undefined ? {} : { instancePath: arguments_.instance }),
          ...(arguments_.server === undefined ? {} : { serverPath: arguments_.server }),
          dryRun: arguments_.dryRun,
          forceConflict: arguments_.forceConflict,
        });
      },
    )
    .command(
      'new-server',
      '公式Craftoriaサーバーの準備とオーバーレイ適用を行います',
      (command) => command
        .option('target', {
          type: 'string',
          demandOption: true,
          description: '作成するサーバーディレクトリ',
          normalize: true,
        })
        .option('java', {
          type: 'string',
          default: 'java',
          description: 'Java 21または25の実行ファイル',
          normalize: true,
        })
        .option('install-base', {
          type: 'boolean',
          default: false,
          description: '公式ベースサーバーの導入まで自動実行します',
        })
        .option('accept-eula', {
          type: 'boolean',
          default: false,
          description: 'Minecraft EULAへの同意を明示します',
        })
        .option('dry-run', {
          type: 'boolean',
          default: false,
          description: '変更せず実行内容だけを表示します',
        }),
      async (arguments_) => {
        await newCraftoriaServer({
          targetPath: arguments_.target,
          javaPath: arguments_.java,
          installBase: arguments_.installBase,
          acceptEula: arguments_.acceptEula,
          dryRun: arguments_.dryRun,
        });
      },
    )
    .demandCommand(1, 'サブコマンドを指定してください。')
    .strictCommands()
    .strictOptions()
    .recommendCommands()
    .showHelpOnFail(true)
    .help()
    .version(false)
    .exitProcess(false)
    .fail((message, error) => {
      throw error ?? new Error(message);
    })
    .parseAsync();
}

main().catch((error: unknown) => {
  console.error(`ERROR: ${errorMessage(error)}`);
  process.exitCode = 1;
});
