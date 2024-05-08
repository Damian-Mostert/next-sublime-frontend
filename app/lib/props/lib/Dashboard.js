export class Dashboard {
  group = "";
  title = "";
  model = null;
  //if is avalable on navigation tab
  onNavigation(user) {
    return true;
  }
  //CRUD
  canCreate() {
    return true;
  }
  canRead() {
    return true;
  }
  canUpdate() {
    return true;
  }
  canDelete() {
    return true;
  }
  preview(){
    return undefined;
  };
  //Query
  async query() {
    return await this.model().get();
  }
  //build fields
  fields(user) {
    return [];
  }
}
