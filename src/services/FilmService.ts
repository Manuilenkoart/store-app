import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IFilm } from '../models/IFilm';

export const filmApi = createApi({
  reducerPath: 'filmApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3002/' }),
  tagTypes: ['Film'],
  endpoints: build => ({
    getAllFilms: build.query<IFilm[], string>({
      query: () => ({
        url: 'film',
      }),
      providesTags: result =>
        /* eslint-disable */
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Film' as const, _id })),
              { type: 'Film', id: 'LIST' },
            ]
          : [{ type: 'Film', id: 'LIST' }],
    }),
    getFilmById: build.query<IFilm, any>({
      query: filmId => ({
        url: `film/${filmId}`,
      }),
    }),
    addFilm: build.mutation<IFilm, IFilm>({
      query: body => ({
        url: 'film',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Film', id: 'LIST' }],
    }),
    deleteFilm: build.mutation<IFilm, IFilm>({
      query: film => ({
        url: 'film',
        method: 'DELETE',
        body: { _id: film._id },
      }),
      invalidatesTags: [{ type: 'Film', id: 'LIST' }],
    }),
    updateFilm: build.mutation<IFilm, IFilm>({
      query: body => ({
        url: 'film',
        method: 'PUT',
        body,
      }),
      invalidatesTags: [{ type: 'Film', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetAllFilmsQuery,
  useGetFilmByIdQuery,
  useAddFilmMutation,
  useDeleteFilmMutation,
  useUpdateFilmMutation,
} = filmApi;
