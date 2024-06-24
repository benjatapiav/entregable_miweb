async function getViniloschilenos(){
    const res = await fetch("http://localhost:400/productos");
    const resJson = await res.json();
    return resJson;
  }

  async function getVinilosanglo(){
    const res = await fetch("http://localhost:400/productos2");
    const resJson2 = await res.json();
    return resJson2;
  }

  async function getTornamesa(){
    const res = await fetch("http://localhost:400/productos3");
    const resJson3 = await res.json();
    return resJson3;
  }

