export class Storage {
  constructor(name) {
    this.bucket_name = name;
  }
  async upload(file) {
    const storageRef = (await useDatabase()).storage.ref(this.bucket_name);
    const fileRef = storageRef.child(file.name);
    return fileRef.put(file);
  }
  async rename(file, newName) {
    const storageRef = (await useDatabase()).storage.ref(this.bucket_name);
    const oldFileRef = storageRef.child(file);
    const newFileRef = storageRef.child(newName);
    return oldFileRef
      .getDownloadURL()
      .then((url) => {
        return newFileRef.putString(url, "data_url");
      })
      .then(() => {
        return oldFileRef.delete();
      });
  }
}
