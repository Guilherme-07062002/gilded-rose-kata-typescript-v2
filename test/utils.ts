export let gameConsoleOutput: string;
let originalConsoleLog: (message: any) => void;
let originalProcessArgv: string[]

export function gameConsoleLog(msg: string) {
  if (msg) gameConsoleOutput += msg;
  
  gameConsoleOutput += "\n";
}

export function prepareGameConsoleLog() {
  gameConsoleOutput = "";
  originalConsoleLog = console.log;
  console.log = gameConsoleLog;
  originalProcessArgv = process.argv;
}
  
export function resetOriginalConsoleLog() {
  console.log = originalConsoleLog;
  process.argv = originalProcessArgv;
}