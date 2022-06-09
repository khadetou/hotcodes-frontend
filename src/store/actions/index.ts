import { ActionType } from "../action-types";

export type User = {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  roles: string[];
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
} | null;

export interface OrderDesign {
  _id?: string;
  userId: string;
  plateform: string;
  typeapp: string;
  appName: string;
  description: string;
  goal: string[];
  target: string;
  mood: string;
  wireframe: string;
  design: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}

export interface OrderWeb {
  _id?: string;
  userId: string;
  plateform: string;
  typeapp: string;
  appName: string;
  description: string;
  goal: string[];
  design?: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}

export interface OrderMobile {
  _id?: string;
  userId: string;
  plateform: string;
  typeapp: string;
  appName: string;
  description: string;
  goal: string[];
  design: {
    public_id: string;
    url: string;
    format: string;
  }[];
  functionnality: [string];
}
export interface OrderMarketing {
  _id?: string;
  userId: string;
  nombreClients: number;
  besoinClients: string;
  genresClient: string;
  ageMoyen: string;
  status: string;
  moyenVentes: string[];
  problemeVente: string;
  nombreProduits: string;
}

interface RegisterSuccessAction {
  type: ActionType.REGISTER_SUCCESS;
}

interface RegisterFailureAction {
  type: ActionType.REGISTER_FAILURE;
  error: string;
}

interface LoginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: {
    token: string;
    user: User;
  };
}

interface LoginFailureAction {
  type: ActionType.LOGIN_FAILURE;
  error: string;
}

interface UpdateUserProfileSuccessAction {
  type: ActionType.UPDATE_USER_PROFILE_SUCCESS;
}
interface UpdateUserProfileFailureAction {
  type: ActionType.UPDATE_USER_PROFILE_FAILURE;
  error: string;
}

interface LoadUserSuccessAction {
  type: ActionType.LOAD_USER;
  payload: {
    user: User;
  };
}

interface LoadUserFaillureAction {
  type: ActionType.LOAD_USER_FAILURE;
  error: string;
}

interface LogoutSuccessAction {
  type: ActionType.LOGOUT_SUCCESS;
}

interface SetSuccessAction {
  type: ActionType.SET_SUCCESS;
  success: boolean;
}

interface ClearErrorAction {
  type: ActionType.CLEAR_ERROR;
}

interface SendConfirmationEmailSuccessAction {
  type: ActionType.SEND_CONFIRMITION_EMAIL_SUCCESS;
  message: string;
}

interface SendConfirmationEmailFailureAction {
  type: ActionType.SEND_CONFIRMITION_EMAIL_FAILURE;
  error: string;
}

interface ResetPasswordSuccessAction {
  type: ActionType.RESET_PASSWORD_SUCCESS;
  payload: {
    user: User;
  };
}

interface ResetPasswordFailureAction {
  type: ActionType.RESET_PASSWORD_FAILURE;
  error: string;
}

interface GetAllUsersSuccessAction {
  type: ActionType.GET_ALL_USERS_SUCCESS;
  payload: {
    users: User[];
  };
}

interface GetAllUsersFailureAction {
  type: ActionType.GET_ALL_USERS_FAILURE;
  error: string;
}

interface GetUserSuccessByIdAction {
  type: ActionType.GET_USER_SUCCESS_BY_ID;
  payload: {
    user: User;
  };
}

interface GetUserFailureByIdAction {
  type: ActionType.GET_USER_FAILURE_BY_ID;
  error: string;
}

interface DeleteUserSuccessAction {
  type: ActionType.DELETE_USER_SUCCESS;
  payload: {
    user: User;
  };
}

interface DeleteUserFailureAction {
  type: ActionType.DELETE_USER_FAILURE;
  error: string;
}

interface CreateOrderWebSuccessAction {
  type: ActionType.CREATE_ORDERWEB_SUCCESS;
  payload: {
    order: OrderWeb;
  };
}

interface CreateOrderWebFailureAction {
  type: ActionType.CREATE_ORDERWEB_FAILURE;
  error: string;
}

interface CreateOrderDesignSuccessAction {
  type: ActionType.CREATE_ORDERDESIGN_SUCCESS;
  payload: {
    order: any;
  };
}

interface CreateOrderDesignFailureAction {
  type: ActionType.CREATE_ORDERDESIGN_FAILURE;
  error: string;
}

interface CreateOrderMobileSuccessAction {
  type: ActionType.CREATE_ORDERMOBILE_SUCCESS;
  payload: {
    order: any;
  };
}

interface CreateOrderMobileFailureAction {
  type: ActionType.CREATE_ORDERMOBILE_FAILURE;
  error: string;
}

interface CreateOrderMarketingFailureAction {
  type: ActionType.CREATE_ORDERMARKETING_FAILURE;
  error: string;
}
interface CreateOrderMarketingSuccessAction {
  type: ActionType.CREATE_ORDERMARKETING_SUCCESS;
  payload: {
    order: any;
  };
}

interface GetAllOrderWebSuccessAction {
  type: ActionType.GET_ALL_ORDERWEB_SUCCESS;
  payload: {
    orders: OrderWeb[];
  };
}

interface GetAllOrderWebFailureAction {
  type: ActionType.GET_ALL_ORDERWEB_FAILURE;
  error: string;
}

interface GetAllOrderDesignSuccessAction {
  type: ActionType.GET_ALL_ORDERDESIGN_SUCCESS;
  payload: {
    orders: OrderDesign[];
  };
}

interface GetAllOrderDesignFailureAction {
  type: ActionType.GET_ALL_ORDERDESIGN_FAILURE;
  error: string;
}

interface GetAllOrderMobileSuccessAction {
  type: ActionType.GET_ALL_ORDERMOBILE_SUCCESS;
  payload: {
    orders: OrderMobile[];
  };
}

interface GetAllOrderMobileFailureAction {
  type: ActionType.GET_ALL_ORDERMOBILE_FAILURE;
  error: string;
}

interface GetMyOrderWebSuccessAction {
  type: ActionType.GET_ORDERWEB_SUCCESS;
  payload: {
    orders: OrderWeb[];
  };
}

interface GetMyOrderWebFailureAction {
  type: ActionType.GET_ORDERWEB_FAILURE;
  error: string;
}

interface GetMyOrderMobileSuccessAction {
  type: ActionType.GET_ORDERMOBILE_SUCCESS;
  payload: {
    orders: OrderMobile[];
  };
}

interface GetMyOrderMobileFailureAction {
  type: ActionType.GET_ORDERMOBILE_FAILURE;
  error: string;
}

interface GetMyOrderDesignSuccessAction {
  type: ActionType.GET_ORDERDESIGN_SUCCESS;
  payload: {
    orders: OrderDesign[];
  };
}

interface GetMyOrderDesignFailureAction {
  type: ActionType.GET_ORDERDESIGN_FAILURE;
  error: string;
}

interface GetMyOrderMobileFailureAction {
  type: ActionType.GET_ORDERMOBILE_FAILURE;
  error: string;
}

interface GetOrderWebByIdSuccessAction {
  type: ActionType.GET_ORDERWEB_BY_ID_SUCCESS;
  payload: {
    order: OrderWeb;
  };
}

interface GetOrderWebByIdFailureAction {
  type: ActionType.GET_ORDERWEB_BY_ID_FAILURE;
  error: string;
}

interface GetOrderDesignByIdSuccessAction {
  type: ActionType.GET_ORDERDESIGN_BY_ID_SUCCESS;
  payload: {
    order: OrderDesign;
  };
}

interface GetOrderDesignByIdFailureAction {
  type: ActionType.GET_ORDERDESIGN_BY_ID_FAILURE;
  error: string;
}

interface GetOrderMobileByIdSuccessAction {
  type: ActionType.GET_ORDERMOBILE_BY_ID_SUCCESS;
  payload: {
    order: OrderMobile;
  };
}

interface GetOrderMobileByIdFailureAction {
  type: ActionType.GET_ORDERMOBILE_BY_ID_FAILURE;
  error: string;
}

interface UpdateOrderWebSuccessAction {
  type: ActionType.UPDATE_ORDERWEB_SUCCESS;
  payload: {
    order: OrderWeb;
  };
}

interface UpdateOrderWebFailureAction {
  type: ActionType.UPDATE_ORDERWEB_FAILURE;
  error: string;
}

interface UpdateOrderDesignSuccessAction {
  type: ActionType.UPDATE_ORDERDESIGN_SUCCESS;
  payload: {
    order: OrderDesign;
  };
}

interface UpdateOrderDesignFailureAction {
  type: ActionType.UPDATE_ORDERDESIGN_FAILURE;
  error: string;
}

interface UpdateOrderMobileSuccessAction {
  type: ActionType.UPDATE_ORDERMOBILE_SUCCESS;
  payload: {
    order: OrderMobile;
  };
}

interface UpdateOrderMobileFailureAction {
  type: ActionType.UPDATE_ORDERMOBILE_FAILURE;
  error: string;
}

interface DeleteOrderWebSuccessAction {
  type: ActionType.DELETE_ORDERWEB_SUCCESS;
  payload: {
    order: OrderWeb;
  };
}

interface DeleteOrderWebFailureAction {
  type: ActionType.DELETE_ORDERWEB_FAILURE;
  error: string;
}

interface DeleteOrderDesignSuccessAction {
  type: ActionType.DELETE_ORDERDESIGN_SUCCESS;
  payload: {
    order: OrderDesign;
  };
}

interface DeleteOrderDesignFailureAction {
  type: ActionType.DELETE_ORDERDESIGN_FAILURE;
  error: string;
}

interface DeleteOrderMobileSuccessAction {
  type: ActionType.DELETE_ORDERMOBILE_SUCCESS;
  payload: {
    order: OrderMobile;
  };
}

interface DeleteOrderMobileFailureAction {
  type: ActionType.DELETE_ORDERMOBILE_FAILURE;
  error: string;
}

export type Action =
  | RegisterSuccessAction
  | ClearErrorAction
  | RegisterFailureAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutSuccessAction
  | LoadUserSuccessAction
  | LoadUserFaillureAction
  | UpdateUserProfileSuccessAction
  | UpdateUserProfileFailureAction
  | SendConfirmationEmailSuccessAction
  | SendConfirmationEmailFailureAction
  | ResetPasswordSuccessAction
  | ResetPasswordFailureAction
  | SetSuccessAction
  | GetAllUsersSuccessAction
  | GetAllUsersFailureAction
  | GetUserSuccessByIdAction
  | GetUserFailureByIdAction
  | GetOrderWebByIdSuccessAction
  | GetOrderWebByIdFailureAction
  | GetOrderDesignByIdSuccessAction
  | GetOrderDesignByIdFailureAction
  | GetOrderMobileByIdSuccessAction
  | GetOrderMobileByIdFailureAction
  | GetAllOrderWebSuccessAction
  | DeleteUserSuccessAction
  | DeleteUserFailureAction
  | CreateOrderWebSuccessAction
  | CreateOrderWebFailureAction
  | CreateOrderDesignSuccessAction
  | CreateOrderDesignFailureAction
  | CreateOrderMobileSuccessAction
  | CreateOrderMobileFailureAction
  | CreateOrderMarketingSuccessAction
  | CreateOrderMarketingFailureAction
  | GetAllOrderWebFailureAction
  | GetAllOrderDesignSuccessAction
  | GetAllOrderDesignFailureAction
  | GetAllOrderMobileSuccessAction
  | GetAllOrderMobileFailureAction
  | GetMyOrderWebSuccessAction
  | GetMyOrderMobileSuccessAction
  | GetMyOrderDesignSuccessAction
  | GetMyOrderMobileSuccessAction
  | GetMyOrderMobileFailureAction
  | GetMyOrderWebFailureAction
  | GetMyOrderDesignFailureAction
  | UpdateOrderWebSuccessAction
  | UpdateOrderWebFailureAction
  | UpdateOrderDesignSuccessAction
  | UpdateOrderDesignFailureAction
  | UpdateOrderMobileSuccessAction
  | UpdateOrderMobileFailureAction
  | DeleteOrderWebSuccessAction
  | DeleteOrderWebFailureAction
  | DeleteOrderDesignSuccessAction
  | DeleteOrderDesignFailureAction
  | DeleteOrderMobileSuccessAction
  | DeleteOrderMobileFailureAction;
