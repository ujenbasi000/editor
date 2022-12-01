import { useContext } from "react";
import { getCommands } from "../commands";
import { EditorContext } from "../Context";

const Toolbar = () => {
  return (
    <div className="flex items-center gap-2 mb-3">
      {console.log({ commands: getCommands() })}
      {getCommands().map((command) => {
        return (
          command.keyCommand !== "divider" && (
            <button className="iconBtn">{command.icon}</button>
          )
        );
      })}
    </div>
  );
};

export default Toolbar;
