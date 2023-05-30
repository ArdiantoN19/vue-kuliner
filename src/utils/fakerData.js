import { convertResponseToJSONString } from "./helpers";
import db from "./db.json";

let datas = db;
const dataBestProducts = datas["best-products"];
const dataProducts = datas["products"];
const dataCarts = datas["keranjangs"];
const dataOrders = datas["pesanans"];

const faker = (() => {
  const mockRequest = (action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(action());
      }, 1000);
    });
  };
  const bestProducts = () => {
    return mockRequest(() => {
      return convertResponseToJSONString(
        "success",
        "berhasil mendapatkan data",
        dataBestProducts
      );
    });
  };

  const products = () => {
    return mockRequest(() => {
      return convertResponseToJSONString(
        "success",
        "berhasil mendapatkan data",
        dataProducts
      );
    });
  };

  const carts = () => {
    return new Promise((resolved, _rejected) => {
      setTimeout(() => {
        resolved(
          convertResponseToJSONString(
            "success",
            "berhasil mendapatkan data",
            dataCarts
          )
        );
      }, 1000);
    });
  };

  const addCart = ({ id, jumlahBeli, keterangan }) => {
    const idPesanan = +new Date();
    const findProduct = dataProducts.find((data) => data.id === Number(id));
    const newData = {
      id: idPesanan,
      jumlah_pemesanan: jumlahBeli,
      products: findProduct,
      keterangan,
    };
    dataCarts.push(newData);
    return new Promise((resolved, _rejected) => {
      setTimeout(() => {
        resolved(
          convertResponseToJSONString(
            "success",
            "berhasil membuat pesanan",
            newData
          )
        );
      }, 1000);
    });
  };

  const orders = () => {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        resolved(
          convertResponseToJSONString(
            "success",
            "berhasil mendapatkan data pesanan",
            dataOrders
          )
        );
      }, 1000);
    });
  };

  const addOrder = (data) => {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        if (!data.nama) {
          return rejected(
            convertResponseToJSONString("fail", "nama harus di isi", "")
          );
        }
        if (!data.noMeja) {
          return rejected(
            convertResponseToJSONString("fail", "Nomer meja harus di isi", "")
          );
        }
        if (!data.keranjangs.length) {
          return rejected(
            convertResponseToJSONString(
              "fail",
              "Anda harus menambahkan item dulu ke keranjang",
              ""
            )
          );
        }
        const id = +new Date() * 123;
        const newOrder = {
          id,
          ...data,
        };
        dataOrders.push(newOrder);
        return resolved(
          convertResponseToJSONString(
            "success",
            "berhasil melakukan order makanan",
            { nama: data.nama, noMeja: data.noMeja, total: data.total }
          )
        );
      }, 1000);
    });
  };

  return {
    bestProducts,
    products,
    carts,
    addCart,
    orders,
    addOrder,
  };
})();

export default faker;
