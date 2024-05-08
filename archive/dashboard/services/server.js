"use server";

import dashboard from "../../../@application/dashboard";

export async function getGroups() {
  var groups = [];

  class group {
    constructor(title, data) {
      for (let i in groups) {
        if (groups[i].title == title) {
          groups[i].titles.push(data);
          return;
        }
      }
      groups.push({ title, titles: [data] });
    }
  }

  dashboard.map((i) => {
    new group(i.group, i);
  });
  return groups;
}

export async function deleteItem(slug, id) {
  for (let board of dashboard) {
    if (board.title == slug) {
      await board.model().where("id", "==", id).delete();
    }
  }
}

export async function updateItem(slug, id, newData) {
  console.log(slug, id, newData);
  for (let board of dashboard) {
    if (board.title == slug) {
      await board.model().where("id", "==", id).update(newData);
    }
  }
}

export async function createItem(slug, newData) {
  for (let board of dashboard) {
    if (board.title == slug) {
      console.log("Found");
      return await board.model().make(newData);
    }
  }
  console.log("Not found");
}

export async function getOne(slug, id) {
  for (let board of dashboard) {
    if (board.title == slug) {
      let models = await board.model().get();
      for (let chuck of models) {
        if (chuck.id == id) return chuck;
      }
    }
  }
  return null;
}

export async function getAll(slug) {
  var user = {};
  for (let Class of dashboard) {
    const Model = Class.model();

    if (Class.title == slug) {
      return Class.query
        ? await Class.query(user, Class.model)
        : await Model.get();
    }
  }
  return null;
}

export async function getFields(slug, data) {
  for (let board of dashboard) {
    if (board.title == slug) {
      return board.fields({}, data);
    }
  }
  return [];
}
export async function getPreview(slug) {
  for (let board of dashboard) {
    if (board.title == slug) {
      return board.preview;
    }
  }
  return null;
}
