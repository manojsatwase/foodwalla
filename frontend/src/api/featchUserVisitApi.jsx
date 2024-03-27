
import { fetchUserVisitFailure, fetchUserVisitRequest, fetchUserVisitSuccess } from "../redux/slices/userVisitInfoSlice";
import { METHODS,makeRequest } from "./apiCall";

export const saveUserAPI = (userData) => async (dispatch) => {
     await makeRequest(
        dispatch,
        fetchUserVisitRequest,
        fetchUserVisitSuccess,
        fetchUserVisitFailure,
        METHODS.POST,
        '/api/v1/saveuserapi',
        userData
     )
}
