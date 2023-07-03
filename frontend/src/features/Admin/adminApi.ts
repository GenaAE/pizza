import { AdminType, AddProduct, DeleteProduct } from './types/AdminType';

export const getProductsAdmin = async (): Promise<AdminType[]> => {
  const res = await fetch('/admin/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
  // const data = await res.json();

  // return data;
};

export const addProduct = async (adminAdd: FormData): Promise<AdminType> => {
  // const formData = new FormData();

  const res = await fetch('/admin', {
    method: 'POST',
    body: adminAdd,
  });
  return res.json();
  // const data = await res.json();
  // console.log(data);
  // return data;
};
export const deleteProduct = async (prodDel: number): Promise<AdminType> => {
  const res = await fetch(`/admin/${prodDel}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },

    // const fullObject = await res.json();
    // return fullObject;
  });

  return res.json();
};
// export const updateEvent = async (eventToUpdate: FormData): Promise<Event> => {
//   const url = `/events/${eventToUpdate.get('id')}`;
//   const res = await fetch(url, {
//     method: 'PUT',
//     body: eventToUpdate,
//   });
//   const data = await res.json();
//   return data;
// };

// export const deleteEvent = async (eventToDelete: Event): Promise<Number> => {
//   const url = `/events/${eventToDelete.id}`;
//   const res = await fetch(url, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const { id } = await res.json();
//   return Number(id);
// };
