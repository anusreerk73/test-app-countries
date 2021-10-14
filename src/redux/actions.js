import axios from "axios";
import USER from "../constants";
import api from '../api';

export const fetchList = () => async dispatch => {
    const response = await api.get('/all?fields=name,region,flag')

    console.log(response.data , "response.data111")

    dispatch({
        type: USER.LOAD_COUNTRY_LIST,
      });
      try {
        dispatch({
          type: USER.LOAD_COUNTRY_LIST_SUCCESS,
          listData: response.data,
          isError: false,
        });
      } catch (e) {
        dispatch({
          type: USER.LOAD_COUNTRY_LIST_SUCCESS,
          listData: [],
          isError: true,
        });
      }
}

