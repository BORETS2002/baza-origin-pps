import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { Selects } from "../../../components/style/styleComponent";
import "../header/header.css";

import Tables from "../table/table";
function Header() {
  const SelectValue = useRef();
  const SelectValueModal = useRef();

  const [SelectKategory, setSelectKategory] = useState();

  function hasFormSubmit() {
    if (SelectValue.current.value != 0) {
      setSelectKategory(SelectValue.current.value);
    }
    if (SelectValueModal.current.value != 0) {
      setSelectKategory(SelectValueModal.current.value);
    }
  }

  console.log(SelectKategory);
  return (
    <>
      <header className='header'>
        <div className='containers'>
          <div className='blog'>
            <button
              type='button'
              className='btn    btn-ModalOpen  '
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-list'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
            </button>

            <div
              className='modal fade'
              id='exampleModal'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='exampleModalLabel'>
                      Qidiruv tizimi
                    </h1>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-body'>
                    <form
                      className=' form-deta-Modall '
                      onSubmit={(e) => hasFormSubmit(e.preventDefault())}
                    >
                      <select
                        className='SelectHeader input-style pb-0'
                        ref={SelectValueModal}
                        required
                      >
                        <option value='0' disabled selected>
                          Kategoriya tanlang
                        </option>
                        <option value='1'> IIO olib kelingan fuqarolar</option>
                        <option value='2'>Tuzilgan bayonnomalar</option>
                        <option value='3'>PROF hisobdagi shaxslar</option>
                        <option value='4'>Ushlangan qidiruvdagilar</option>
                        <option value='5'>Aniqlangan bedaraklar</option>
                        <option value='6'>Obyekt qorovulari</option>
                        <option value='7'>Ov qurollari</option>
                      </select>
                      <div className='mt-3 mb-3'>
                        <input
                          className='deta-input input-style'
                          type='number'
                          minLength={3}
                          placeholder='Yil'
                          required
                        />
                        <input
                          className='deta-input input-style'
                          type='number'
                          required
                          placeholder='oy'
                        />
                        <input
                          className='deta-input input-style'
                          type='number'
                          required
                          placeholder='sana'
                        />
                        <input
                          className='  input-style'
                          type='time'
                          required
                          placeholder='vaqt'
                        />
                        <input
                          className='  input-style'
                          type='time'
                          required
                          placeholder='vaqt'
                        />
                      </div>
                      <select className='input-style mb-3'>
                        <option disabled selected>
                          Jizzax sh
                        </option>
                      </select>

                      <select
                        className=' input-style  mb-3'
                        placeholder='Mahalla'
                        required
                        defaultValue={"DEFAULT"}
                      >
                        <option disabled selected defaultValue={"DEFAULT"}>
                          Mahalla
                        </option>
                        <option> Xalqobod MFY</option>
                        <option> Jizzaxlik MFY</option>
                        <option> Uchariq MFY</option>
                        <option> Ravallik MFY</option>
                        <option> O'ratepalik MFY</option>
                        <option> Olmazor MFY</option>
                        <option> Zilol MFY</option>
                        <option> Kassoblik MFY</option>
                        <option> Oqqo'rg'onlik MFY</option>
                        <option> Sayiljo‘yi MFY</option>
                        <option> Bog‘ishamol MFY</option>
                        <option> A.Temur MFY</option>
                        <option> Navro‘z MFY</option>
                        <option> “Toshloq” MFY</option>
                        <option> Shodlik MFY</option>
                        <option> Turon MFY</option>
                        <option> Sangzor MFY</option>
                        <option> Kimyogar MFI</option>
                        <option> Madaniyat MFY</option>
                        <option> Tinchlik MFY</option>
                        <option> MFY jant</option>
                        <option> H. Olimjon MFI</option>
                        <option> A.Navoiy MFY</option>
                        <option> Hayobod MFY</option>
                        <option> Sayhon MFI</option>
                        <option> Ittifoq MFY</option>
                        <option> Yoshlik MFY</option>
                        <option> Bobur MFY</option>
                        <option> Kaliya MFY</option>
                        <option> “Bunyodkor” MFY</option>
                        <option> Do'stlik MFY</option>
                        <option> Nurliobod MFY</option>
                        <option> Ulug'bek MFY</option>
                      </select>

                      <button className='btn-nav ms-auto' type='submit'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-search'
                          viewBox='0 0 16 16'
                        >
                          <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                        </svg>
                      </button>
                    </form>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Yopish
                    </button>
                    {/* <button type='button' className='btn btn-primary'>
                      Save changes
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <h1 className='text-white'>PPX BAZASI</h1>

            <form
              className='form-deta  '
              onSubmit={(e) => hasFormSubmit(e.preventDefault())}
            >
              <select
                className='SelectHeader input-style pb-2'
                ref={SelectValue}
                required
              >
                <option value='0' selected disabled>
                  Kategoriya tanlang
                </option>
                <option value='1'> IIO olib kelingan fuqarolar</option>
                <option value='2'>Tuzilgan bayonnomalar</option>
                <option value='3'>PROF hisobdagi shaxslar</option>
                <option value='4'>Ushlangan qidiruvdagilar</option>
                <option value='5'>Aniqlangan bedaraklar</option>
                <option value='6'>Obyekt qorovulari</option>
                <option value='7'>Ov qurollari</option>
              </select>
              <input
                className='deta-input input-style'
                type='number'
                placeholder='Yil'
                required
              />
              <input
                className='deta-input input-style'
                type='number'
                required
                placeholder='oy'
              />
              <input
                className='deta-input input-style'
                type='number'
                required
                placeholder='sana'
              />
              <input
                className='  input-style'
                type='time'
                required
                placeholder='vaqt'
              />
              <input
                className='  input-style'
                type='time'
                required
                placeholder='vaqt'
              />
              <select className=' input-style'>
                <option disabled selected>
                  Jizzax sh
                </option>
              </select>

              <select className=' input-style' placeholder='Mahalla' required>
                <option disabled selected>
                  Mahalla
                </option>
                <option> Xalqobod MFY</option>
                <option> Jizzaxlik MFY</option>
                <option> Uchariq MFY</option>
                <option> Ravallik MFY</option>
                <option> O'ratepalik MFY</option>
                <option> Olmazor MFY</option>
                <option> Zilol MFY</option>
                <option> Kassoblik MFY</option>
                <option> Oqqo'rg'onlik MFY</option>
                <option> Sayiljo‘yi MFY</option>
                <option> Bog‘ishamol MFY</option>
                <option> A.Temur MFY</option>
                <option> Navro‘z MFY</option>
                <option> “Toshloq” MFY</option>
                <option> Shodlik MFY</option>
                <option> Turon MFY</option>
                <option> Sangzor MFY</option>
                <option> Kimyogar MFI</option>
                <option> Madaniyat MFY</option>
                <option> Tinchlik MFY</option>
                <option> MFY jant</option>
                <option> H. Olimjon MFI</option>
                <option> A.Navoiy MFY</option>
                <option> Hayobod MFY</option>
                <option> Sayhon MFI</option>
                <option> Ittifoq MFY</option>
                <option> Yoshlik MFY</option>
                <option> Bobur MFY</option>
                <option> Kaliya MFY</option>
                <option> “Bunyodkor” MFY</option>
                <option> Do'stlik MFY</option>
                <option> Nurliobod MFY</option>
                <option> Ulug'bek MFY</option>
              </select>

              <button className='btn-nav' type='submit'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </header>
      <hr className='line' />
      <Tables SelectKategory={SelectKategory} />
    </>
  );
}

export default Header;
