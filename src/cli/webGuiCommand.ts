import { z } from "incur";
import type { CliInstance } from "./types.js";
import type { Logger } from "../logger.js";
import { startWebGuiServer } from "./webGuiServer.js";

export const registerGuiCommand = (cli: CliInstance, _logger: Logger): void => {
  cli.command("gui", {
    description: "Start the iOS/Apple styled interactive Web GUI",
    options: z.object({
      port: z.number().default(3000).describe("Port to listen on"),
      host: z.string().default("0.0.0.0").describe("Host interface to bind"),
    }),
    run: async ({ options }) => {
      await startWebGuiServer(options.port, options.host);
      return { success: true, message: `GUI server started on http://${options.host}:${options.port}` };
    },
  });
};
