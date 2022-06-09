import { ActionType } from "../action-types";
import {
  Action,
  OrderDesign,
  OrderMarketing,
  OrderMobile,
  OrderWeb,
} from "../actions";

interface OrderState {
  orderWeb: OrderWeb[];
  orderMobile: OrderMobile[];
  orderDesign: OrderDesign[];
  orderw: any;
  orderm: any;
  orderd: any;
  orderMarketing: OrderMarketing[];
  success: boolean;
  loading: boolean;
  error: string;
}

const initialState: OrderState = {
  orderWeb: [],
  orderMobile: [],
  orderDesign: [],
  orderd: null,
  orderm: null,
  orderw: null,
  orderMarketing: [],
  success: false,
  loading: false,
  error: "",
};

const orderReducer = (
  state: OrderState = initialState,
  action: Action
): OrderState => {
  switch (action.type) {
    case ActionType.CREATE_ORDERWEB_SUCCESS:
      return {
        ...state,
        success: true,
        orderWeb: [...state.orderWeb, action.payload.order],
        loading: false,
      };

    case ActionType.CREATE_ORDERDESIGN_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderDesign, action.payload.order],
        loading: false,
      };
    case ActionType.CREATE_ORDERMOBILE_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderMobile, action.payload.order],
        loading: false,
      };
    case ActionType.CREATE_ORDERMARKETING_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: [...state.orderMarketing, action.payload.order],
        loading: false,
      };

    case ActionType.GET_ALL_ORDERWEB_SUCCESS:
      return {
        ...state,
        orderWeb: action.payload.orders,
        loading: false,
      };

    case ActionType.GET_ALL_ORDERDESIGN_SUCCESS:
      return {
        ...state,
        orderDesign: action.payload.orders,
        loading: false,
      };

    case ActionType.GET_ALL_ORDERMOBILE_SUCCESS:
      return {
        ...state,
        orderMobile: action.payload.orders,
        loading: false,
      };

    case ActionType.GET_ORDERWEB_SUCCESS: {
      return {
        ...state,
        orderWeb: action.payload.orders,
        loading: false,
      };
    }

    case ActionType.GET_ORDERDESIGN_SUCCESS: {
      return {
        ...state,
        orderDesign: action.payload.orders,
        loading: false,
      };
    }

    case ActionType.GET_ORDERMOBILE_SUCCESS: {
      return {
        ...state,
        orderMobile: action.payload.orders,
        loading: false,
      };
    }

    case ActionType.GET_ORDERWEB_BY_ID_SUCCESS: {
      return {
        ...state,
        orderw: action.payload.order,
        loading: false,
      };
    }

    case ActionType.GET_ORDERDESIGN_BY_ID_SUCCESS: {
      return {
        ...state,
        orderd: action.payload.order,
        loading: false,
      };
    }

    case ActionType.GET_ORDERMOBILE_BY_ID_SUCCESS: {
      return {
        ...state,
        orderm: action.payload.order,
        loading: false,
      };
    }

    case ActionType.UPDATE_ORDERWEB_SUCCESS:
      return {
        ...state,
        success: true,
        orderWeb: state.orderWeb.map((order: any) =>
          order.id === action.payload.order._id ? action.payload.order : order
        ),
        loading: false,
      };

    case ActionType.UPDATE_ORDERDESIGN_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: state.orderDesign.map((order: any) =>
          order.id === action.payload.order._id ? action.payload.order : order
        ),
        loading: false,
      };

    case ActionType.UPDATE_ORDERMOBILE_SUCCESS:
      return {
        ...state,
        success: true,
        orderMobile: state.orderMobile.map((order: any) =>
          order.id === action.payload.order._id ? action.payload.order : order
        ),
        loading: false,
      };

    case ActionType.DELETE_ORDERWEB_SUCCESS:
      return {
        ...state,
        success: true,
        orderWeb: state.orderWeb.filter(
          (order: any) => order?.id !== action.payload.order._id
        ),
        loading: false,
      };

    case ActionType.DELETE_ORDERDESIGN_SUCCESS:
      return {
        ...state,
        success: true,
        orderDesign: state.orderDesign.filter(
          (order: any) => order?.id !== action.payload.order._id
        ),
        loading: false,
      };

    case ActionType.DELETE_ORDERMOBILE_SUCCESS:
      return {
        ...state,
        success: true,
        orderMobile: state.orderMobile.filter(
          (order: any) => order?.id !== action.payload.order._id
        ),
        loading: false,
      };

    case ActionType.DELETE_ORDERDESIGN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionType.SET_SUCCESS:
      return {
        ...state,
        success: action.success,
      };

    case ActionType.CREATE_ORDERDESIGN_FAILURE:
    case ActionType.CREATE_ORDERMARKETING_FAILURE:
    case ActionType.CREATE_ORDERWEB_FAILURE:
    case ActionType.CREATE_ORDERMOBILE_FAILURE:
    case ActionType.GET_USER_FAILURE_BY_ID:
    case ActionType.GET_ALL_ORDERWEB_FAILURE:
    case ActionType.GET_ALL_ORDERMOBILE_FAILURE:
    case ActionType.GET_ORDERWEB_BY_ID_FAILURE:
    case ActionType.GET_ORDERWEB_FAILURE:
    case ActionType.GET_ORDERDESIGN_FAILURE:
    case ActionType.GET_ORDERMOBILE_FAILURE:
    case ActionType.GET_ORDERWEB_BY_ID_FAILURE:
    case ActionType.GET_ORDERDESIGN_BY_ID_FAILURE:
    case ActionType.GET_ORDERMOBILE_BY_ID_FAILURE:
    case ActionType.DELETE_ORDERWEB_FAILURE:
    case ActionType.DELETE_ORDERMOBILE_FAILURE:
    case ActionType.DELETE_ORDERDESIGN_FAILURE:
    case ActionType.UPDATE_ORDERWEB_FAILURE:
    case ActionType.UPDATE_ORDERMOBILE_FAILURE:
    case ActionType.UPDATE_ORDERDESIGN_FAILURE:
    case ActionType.CREATE_ORDERDESIGN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case ActionType.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    default:
      return state;
  }
};

export default orderReducer;
