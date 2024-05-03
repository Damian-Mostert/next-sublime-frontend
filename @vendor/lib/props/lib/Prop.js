export class Prop {
  constructor(key) {
    this.key = key;
  }
  outside = false;
  required = false;
  dont_show_at_view = false;
  dont_show_at_detail = false;
  dont_show_at_delete = false;
  dont_show_at_updata = false;
  require = () => {
    this.required = true;
    return this;
  };
  hideAtView = () => {
    this.dont_show_at_view = true;
    return this;
  };
  hideAtDetail = () => {
    this.dont_show_at_detail = true;
    return this;
  };
  hideAtDelete = () => {
    this.dont_show_at_delete = true;
    return this;
  };
  hideAtUpdate = () => {
    this.dont_show_at_update = true;
    return this;
  };
  detail = (input) => {
    return (
      <div>
        <div>{this.title}</div>
        <div>{input}</div>
      </div>
    );
  };
  view = (input) => {
    return <>{input}</>;
  };
  edit = (value, update) => {
    return (
      <div>
        <Input
          value={value}
          require={this.required}
          type={this.mime_type}
          onChange={update}
        />
      </div>
    );
  };
}
