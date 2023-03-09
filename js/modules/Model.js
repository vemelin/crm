import data from "../goods.json" assert { type: "json" };

export class Model {
  constructor(selector) {
    this.model = selector;
    this.data = data;
  }

  url = (path, id) => 
    (path) ? `https://cms-yyk5.onrender.com/${path}` :
    (id) ? `https://cms-yyk5.onrender.com/api/goods/${id}` :
    `https://cms-yyk5.onrender.com/api/goods`;

  list = async (callback) => {
    const res = await fetch(this.url());
    if (res.ok) {
      const data = await res.json();
      // if (callback) return callback(null, data);
      return data;
    }
  }

  update = async (id, data, path) => {
    fetch (this.url(id), {
      method: 'PATCH',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  // dataList() {
  //   const url = `https://cms-yyk5.onrender.com/api/goods`;
  //   const data = fetch(url)
  //     .then(res => res.json())
  //     .then(data => data.map(i => console.log(i)))
  //     .catch(err => console.warn(err));
  // }
}