import React from "react";
import { Route, Routes } from "react-router-dom";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardPage from "../cards/pages/CardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import FavCards from "../cards/pages/FavCards";
import MyCards from "../cards/pages/MyCards";
import AboutPage from "../pages/AboutPage";
<<<<<<< HEAD
// import ErrorPage from "../pages/ErrorPage";
import Countries from "../sandbox/effectHook/Countries";
import ErrorPage404 from "../sandbox/homeWork/ErrorPage404";
import FavCardPage from "../cards/pages/FavCardPage";
import Task1 from "../sandbox/homeWork/Task1";
import Task2 from "../sandbox/homeWork/Task2";
import Task4 from "../sandbox/homeWork/Task4";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/stateHook/Counter";
import MyDetails from "../sandbox/stateHook/MyDetails";
import Todo from "../sandbox/stateHook/Todo";

import LoginPage from "../user/pages/LoginPage";
import SignupPage from "../user/pages/SignupPage";
=======
import ErrorPage from "../pages/ErrorPage";
import MyCounter from "../sandbox/class/customHook/MyCounter";
import ShowAlert from "../sandbox/class/customHook/ShowAlert";
import MyData from "../sandbox/class/memorization/MyData";
import ShowData from "../sandbox/class/memorization/ShowData";
import ChangeColor from "../sandbox/class/stateTasks/ChangeColor";
import ChangeStyle from "../sandbox/class/stateTasks/ChangeStyle";
import Father from "../sandbox/context/Father";
import Countries from "../sandbox/effectHook/Countries";
import Effect from "../sandbox/effectHook/Effect";
import FirstEffect from "../sandbox/effectHook/FirstEffect";
import MyForm from "../sandbox/forms/MyForm";
import MyForm2 from "../sandbox/forms/MyForm2";
import TestForm from "../sandbox/forms/TestForm";
import CallBackHook from "../sandbox/memoryHooks/CallBackHook";
import Memo from "../sandbox/memoryHooks/Memo";
import Counter2 from "../sandbox/render/Counter2";
import Get2Countries from "../sandbox/render/Get2Countries";
import RenderComponent from "../sandbox/render/RenderComponent";
import SandBox from "../sandbox/SandBox";
import Counter from "../sandbox/stateHook/Counter";
import MyDetails from "../sandbox/stateHook/MyDetails";
import Password from "../sandbox/stateHook/Password";
import Todo from "../sandbox/stateHook/Todo";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
import ROUTES from "./routesModel";
import MyCardsPage from "../cards/pages/MyCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import ButtonComponent from "../sandbox/data-display/ButtonComponent";
import WheaderApi from "../sandbox/homeWork/WheaderApi";
import RenderComponent from "../sandbox/render/RenderComponent";
import ChooseCountry from "../sandbox/effectHook/ChooseCountry";

// import Form from "../sandbox/class/Memorization/Form";
import MoviesPage from "../sandbox/myTasks/movies/MoviesPage";
import MyForms from "../sandbox/forms/MyForms";
import HomeWorkForm from "../sandbox/forms/HomeWorkForm/HomeWorkForm";
import TodoList from "../sandbox/myTasks/todo/components/TodoList";
import UserProfile from "../user/pages/UserProfile";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
<<<<<<< HEAD
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.HOMEWORK} element={<Task1 />} />
      <Route path={ROUTES.TASK} element={<Task2 />} />
      <Route path={ROUTES.TASK4} element={<Task4 />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path="*" element={<ErrorPage404 />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCardPage />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCardsPage />} />
      <Route path={ROUTES.CREATE_CARD} element={<CreateCardPage />} />

      <Route path={ROUTES.EDIT_USER} element={<UserProfile />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Task4 />} />
        <Route path="todo" element={<Todo />} />
        <Route path="countries" element={<Countries />} />
        <Route path="*" element={<ErrorPage404 />} />
        <Route path={ROUTES.BTN_CMP} element={<ButtonComponent />} />
        <Route path={ROUTES.WHETHER_API} element={<WheaderApi />} />
        <Route path="render" element={<RenderComponent />} />
        <Route path="chooseCountry" element={<ChooseCountry />} />
        <Route path={ROUTES.MOVIES} element={<MoviesPage />} />
        <Route path={ROUTES.MY_TODO} element={<TodoList />} />
      </Route>

      {/* homework form */}

      <Route path="test" element={<MyForms />} />
      <Route path={ROUTES.HW_FORM} element={<HomeWorkForm />} />
=======
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={`${ROUTES.EDIT_CARD}/:id`} element={<EditCardPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path="counter" element={<Counter />} />
        <Route path="mydetails" element={<MyDetails />} />
        <Route path="password" element={<Password />} />
        <Route path="todo" element={<Todo />} />
        <Route path="firsteffect" element={<FirstEffect />} />
        <Route path="countries" element={<Countries />} />
        <Route path="effect" element={<Effect />} />
        <Route path="render" element={<Get2Countries />} />
      </Route>
      <Route path="test" element={<MyForm />} />
      <Route path="form" element={<TestForm />} />
      <Route path="*" element={<ErrorPage />} />
>>>>>>> 328f3c878f4e2bfcc007c639410a6ca9a3f14a15
    </Routes>
  );
}
