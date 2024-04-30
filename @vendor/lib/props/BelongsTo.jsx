export function BelongsTo() {
  this.type = "Select";
  this.data = {};
  this.config = {};
  this.hide_at_index = false;

  this.dont_show_at_view = true;

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
  this.detail = (input) => {
    return (
      <div>
        <div>{this.title}</div>
        <div>{input}</div>
      </div>
    );
  };
  this.view = (input) => {
    return <div></div>;
  };
  this.edit = (input, update) => {
    return <div></div>;
  };
}
