import React from "react";
import Kompyuterchi from "../../assets/imgs/kompyuterchi";
import "../BAZA-ADMIN/baza-admin.css";
function BazaAdmin() {
  return (
    <>
      <div className='wrapperAdmin'>
        <div className='imgBox'>
          <Kompyuterchi />
        </div>
        <div className='inputBox'>
          <h2 className='TitleXodim'>Xodim qo'shish</h2>
          <form className='formAdmin'>
            <input
              className='inputAdmin'
              type='text'
              placeholder='Ismni kiriting...'
            />
            <input
              className='inputAdmin'
              type='text'
              placeholder='Familiyani kiriting...'
            />{" "}
            <input
              className='inputAdmin'
              type='text'
              placeholder='Username kiriting...'
            />{" "}
            <input
              className='inputAdmin'
              type='text'
              placeholder='Parolni kiriting...'
            />
            <button className='formYaratish' type='submit'>
              Yaratish
            </button>
          </form>
          <button type='submit' className='ppxBaza'>
            PPX BAZA
          </button>
        </div>
      </div>
    </>
  );
}

export default BazaAdmin;
