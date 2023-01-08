class LocalStroge {
  save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  get(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
const Stroge = new LocalStroge();
export default Stroge;
