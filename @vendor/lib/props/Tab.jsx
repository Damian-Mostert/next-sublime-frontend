export function Tab(title) {
  this.type = "Tab";
  this.data = {};
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
  this.options = (options) => {
    this.config.options = options;
    return this;
  };
  this.view = (input) => {
    return <div></div>;
  };
  this.edit = (input, update) => {
    return <div></div>;
  };
}
