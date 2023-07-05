import React from 'react';
import { useAppDispatch } from '../../store/store';
import { addProduct } from './adminSlice';

function AddForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const addEventHandler = (newEvent: FormData): void => {
    dispatch(addProduct(newEvent));
  };
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    let newEvent = new FormData(e.currentTarget);
    addEventHandler(newEvent);
  };

  return (
    <form
      action="/admin"
      method="post"
      className="form"
      onSubmit={onHandleSubmit}
    >
      <div className="mb-3">
        <label htmlFor="path" className="form-label">
          Путь
        </label>
        <input
          type="text"
          className="form-control"
          id="path"
          aria-describedby="emailHelp"
          name="path"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="product_category" className="form-label">
          Группа блюд
        </label>
        <input
          type="text"
          className="form-control"
          id="product_category"
          aria-describedby="emailHelp"
          name="product_category"
        />
      </div>{' '}
      <div className="mb-3">
        <label htmlFor="product_name" className="form-label">
          Название блюда
        </label>
        <input
          type="text"
          className="form-control"
          id="product_name"
          aria-describedby="emailHelp"
          name="product_name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="weight" className="form-label">
          Вес в кг
        </label>
        <input
          type="text"
          className="form-control"
          id="weight"
          aria-describedby="emailHelp"
          name="weight"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Цена
        </label>
        <input
          type="text"
          className="form-control"
          id="price"
          aria-describedby="emailHelp"
          name="price"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Фото
        </label>
        <input type="text" className="form-control" id="image" name="image" />
      </div>
      <div className="mb-3">
        <label htmlFor="composition" className="form-label">
          Состав
        </label>
        <input
          type="text"
          className="form-control"
          id="composition"
          name="composition"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Сохранить место
      </button>
    </form>
  );
}

export default AddForm;
