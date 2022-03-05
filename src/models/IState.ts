import { CamerasState } from "../store/reducers/Camera/CameraSlice";
import { ShoppingCartState } from "../store/reducers/ShoppingCartSlice";
import { AuthState } from "../store/reducers/Auth/AuthSlice";
import { FilmsState } from "../store/reducers/FilmSlice";


export interface IState {
  authState: AuthState;
  camerasState: CamerasState;
  shoppingCartState: ShoppingCartState;
  filmsState: FilmsState;
}
