
// const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// // TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = async (emosi) => {

//   // let a = promiseTheaterVGC(emosi);
//   let dataCGV = await promiseTheaterVGC;
//   let dataXXI = await promiseTheaterIXX;

//   try {
//     const cgv = await dataCGV(emosi);
//     const xxi = await dataXXI(emosi);

//     // let hasil = cgv+xxi;
//     // let result = [];
//     // let result = cgv.hasil;
//     // console.log(result[0]);
//     // return hasil;
//     // console.log("coba dong");
//   }

//   catch (pesanGagal) {
//     console.log(pesanGagal);

//   }

//   // return a;
//   // promiseTheaterIXX(emosi)
//   // .then((emosi))

//   // return new Promise ((resolve, reject) => 
//   // {
//   //   if(emosi === null || emosi === "")
//   //   {
//   //     reject("paramater yang dimasukkan kosong");
//   //   }

//   //   else
//   //   {
//   //     resolve(promiseTheaterIXX);      
//   //   }
//   // });



//   // try {
//   //   const pertama = await promiseTheaterIXX(emosi);
//   //   const kedua = await promiseTheaterIXX(emosi);
//   // }

//   // catch (pesanGagal) {
//   //   console.log("gagal");
//   // }
//   // // return promiseTheaterIXX;
// }

// // console.log(promiseOutput("tidak marah"));
// // .then((emosi) => promiseTheaterIXX(emosi))
// // .then((emosi) => promiseTheaterIXX(emosi))
// // .catch((rejectMessage) => console.log(rejectMessage))
// // .finally(() => console.log("All done!"));

// console.log(promiseOutput(promiseTheaterIXX));

// module.exports = {
//   promiseOutput,
// };

const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
    try {
        let dataCGV = await promiseTheaterVGC();
        let dataXXI = await promiseTheaterIXX();

        let hasilCGV = hitungEmosi(emosi, dataCGV);
        let hasilXXI = hitungEmosi(emosi, dataXXI);

        let comboHasil = hasilCGV+hasilXXI;


        // return dataCGV[0];
        // cekHasil = dataCGV[0]; 
        // cekHasil = cekHasil.hasil; 
        // cekHasil = dataCGV.length; 

        // if(cekHasil == "marah")
        // {

        // }

        

        // return [dataCGV, dataXXI];
        // return [hasilCGV, hasilXXI];
        return comboHasil;
    }

    catch {
      return "nyanyi";
    }
}

const hitungEmosi = (emosi, dataFilm) => {

    let panjangData = dataFilm.length;
    let cekHasil = [];
    let total = 0;
    let totalMarah = 0;
    let totalTidakMarah = 0;

    // return panjangData;
    

    for (let i = 0; i < panjangData; i++) 
    {
        cekHasil[i] = dataFilm[i].hasil; 

        // if(cekHasil[i] == "marah")
        if(cekHasil[i] == emosi)
        {
            total += 1;

        }

        // else if(cekHasil[i] == "tidak marah")
        // else if(emosi == "tidak marah")
        // {
        //     total += 1;
        // }     

    }

    // if($jenisEmosi == "")

    // return [totalMarah, totalTidakMarah];
    return total;

}

const TidakMarah = 

module.exports = {
  promiseOutput,
};
