import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { v4 as uuidv4 } from "uuid";

interface IRequestProps {
  types: string[];
  type: string;
  changeType(event: React.ChangeEvent<HTMLInputElement>): void;
}

export default function RequestTypes(props: IRequestProps) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="position"
        name="position"
        value={props.type}
        onChange={props.changeType}
      >
        {props.types.map((type: string) => {
          return (
            <FormControlLabel
              key={uuidv4()}
              value={type}
              control={<Radio color="primary" />}
              label={type}
              labelPlacement="start"
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
