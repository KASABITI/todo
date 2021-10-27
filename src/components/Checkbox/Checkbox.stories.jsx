import Checkbox from "./Checkbox";

export default{
    title: "Components/Checkbox",
    component:Checkbox
}


export const UnChecked = () => <Checkbox checked={true} />;

export const Checked = () => <Checkbox unchecked={false} />;