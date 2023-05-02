import React from "react";
import "../table/table.css";
function Tables({ SelectKategory }) {
  console.log(SelectKategory);

  const TableHead = [
    {
      id: 1,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",
      telefon: "telefon raqami",
      barmoqIzi: "barmoq izi",
      rasm: "rasm",
      TugilganSana: "tug'ilgan sana",
      voqeaJoyT: "voqea joyi shahar",
      voqeaJoyM: "voqea joyi mahalla",
      voqeaJoyTM: "voqea joyi",
      olibkelinganJoy: "olib kelingan joy",
      voqeaSababi: "voqea sababi",
      familyaG: "guvoh familyasi",
      ismG: "guvoh ismi",
      otasini_ismiG: "guvoh otasini ismi",
      telefonG: "guvoh telefon raqami",
      barmoqIziG: "guvoh barmoq izi",
      rasmG: "guvoh rasmi",
      Hulosa: "hodim hulosasi",
    },
    {
      id: 2,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",
      telefon: "telefon raqami",
      barmoqIzi: "barmoq izi",
      rasm: "rasm",
      TugilganSana: "tug'ilgan sana",
      olibkelinganJoy: "olib kelingan joy",
      tuzilganBayonnoma: "tuzilgan bayonnoma",
      Hulosa: "hodim hulosasi",
    },
    {
      id: 3,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",
      voqeaJoyT: "voqea joyi shahar",
      voqeaJoyM: "voqea joyi mahalla",
      voqeaJoyTM: "voqea joyi",
      telefon: "telefon raqami",

      Prof: "PROF da turuvchilar",
      Hulosa: "hodim hulosasi",
    },
    {
      id: 4,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",
      telefon: "telefon raqami",
      barmoqIzi: "barmoq izi",
      rasm: "rasm",
      voqeaJoyT: "voqea joyi shahar",
      voqeaJoyM: "voqea joyi mahalla",
      voqeaJoyTM: "voqea joyi",

      Hulosa: "hodim hulosasi",
    },
    {
      id: 5,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",
      telefon: "telefon raqami",
      barmoqIzi: "barmoq izi",
      rasm: "rasm",
      voqeaJoyT: "voqea joyi shahar",
      voqeaJoyM: "voqea joyi mahalla",
      voqeaJoyTM: "voqea joyi",
      Hulosa: "hodim hulosasi",
    },
    {
      id: 6,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",

      voqeaJoyT: "voqea joyi shahar",
      voqeaJoyM: "voqea joyi mahalla",
      voqeaJoyTM: "voqea joyi",
      telefon: "telefon raqami",

      Hulosa: "hodim hulosasi",
    },

    {
      id: 7,
      familya: "familya",
      ism: "ism",
      otasini_ismi: "otasini ismi",

      ovqurolMarkasi: "ov quroli markasi",
      telefon: "telefon raqami",
      qurolRaqami: "qurol raqami",
      voqeaJoyTM: "voqea joyi",

      Hulosa: "hodim hulosasi",
    },
  ];

  return (
    <div className='base-table'>
      <div className='bodyHead'>
        <div className='list-unstyled p-0 m-0 d-flex mt-5'>
          <table className='tables'>
            {TableHead.map((item) => {
              if (SelectKategory == 1 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>
                      <th className='headerTableTitle'>{item?.telefon}</th>
                      <th className='headerTableTitle'>{item?.barmoqIzi}</th>
                      <th className='headerTableTitle'>{item?.rasm}</th>

                      <th className='headerTableTitle'>{item?.TugilganSana}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
                      <th className='headerTableTitle'>
                        {item?.olibkelinganJoy}
                      </th>
                      <th className='headerTableTitle'>{item?.familyaG}</th>
                      <th className='headerTableTitle'>{item?.ismG}</th>
                      <th className='headerTableTitle'>
                        {item?.otasini_ismiG}
                      </th>
                      <th className='headerTableTitle'>{item?.telefonG}</th>
                      <th className='headerTableTitle'>{item?.barmoqIziG}</th>
                      <th className='headerTableTitle'>{item?.rasmG}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }

              if (SelectKategory == 2 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>
                      <th className='headerTableTitle'>{item?.telefon}</th>
                      <th className='headerTableTitle'>{item?.barmoqIzi}</th>
                      <th className='headerTableTitle'>{item?.rasm}</th>
                      <th className='headerTableTitle'>{item?.TugilganSana}</th>
                      <th className='headerTableTitle'>
                        {item?.tuzilganBayonnoma}
                      </th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }
              if (SelectKategory == 3 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
                      <th className='headerTableTitle'>{item?.telefon}</th>
                      <th className='headerTableTitle'>{item?.Prof}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }
              if (SelectKategory == 4 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>
                      <th className='headerTableTitle'>{item?.barmoqIzi}</th>
                      <th className='headerTableTitle'>{item?.rasm}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }

              if (SelectKategory == 5 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>
                      <th className='headerTableTitle'>{item?.barmoqIzi}</th>
                      <th className='headerTableTitle'>{item?.rasm}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }
              if (SelectKategory == 6 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>

                      <th className='headerTableTitle'>{item?.voqeaJoyT}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyM}</th>
                      <th className='headerTableTitle'>{item?.voqeaJoyTM}</th>
                      <th className='headerTableTitle'>{item?.telefon}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }
              if (SelectKategory == 7 && SelectKategory == item.id) {
                return (
                  <>
                    <tr>
                      <th className='headerTableTitle'>edite</th>

                      <th className='headerTableTitle'>{item?.familya}</th>
                      <th className='headerTableTitle'>{item?.ism}</th>
                      <th className='headerTableTitle'>{item?.otasini_ismi}</th>

                      <th className='headerTableTitle'>{item?.telefon}</th>
                      <th className='headerTableTitle'>
                        {item?.ovqurolMarkasi}
                      </th>
                      <th className='headerTableTitle'>{item?.qurolRaqami}</th>

                      <th className='headerTableTitle'>{item?.Hulosa}</th>
                    </tr>
                  </>
                );
              }
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Tables;
