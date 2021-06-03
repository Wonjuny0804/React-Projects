import axios from 'axios';

export const getData = async () => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_URL}`, {
      params: {
        uuid: process.env.REACT_APP_UUID,
        start_date_id: '2020-01-01',
        end_date_id: '2021-02-28',
        freq: 'months',
        measures: 'retention,cohort_user_cnt,user_cnt,relative_retention'
      }
    });
    return result;
  } catch (err) {
    return new Error(err);
  }
}