export function Array(title, key) {
  this.type = "Array";
  this.data = [];
  this.config = {};
  this.hide_at_index = false;
  this.hideAtIndex = ()=>{
    this.hideAtIndex = true;
    return this;
  }
  this.require = () => {
    this.config.require = true;
    return this;
  };
  this.rules = (rules) => {
    this.config.rules = rules;
    return this;
  };
  this.view = (input) => {
    return <div></div>;
  };
  this.edit = (input, update) => {
    return <div></div>;
  };
}
