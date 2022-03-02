import { ReactNode } from "react";

// children prop type
export type Children_Type = ReactNode;

// input types
export type InputType_Type = "text" | "password" | "number" | "file" | "email";

// auth context type
export type AuthContextInitialState_Type = {
  isLoggedin: boolean;
  userData: object;
};

export type FontSizes =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontWeights =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type Colors =
  | "bgPrimary"
  | "bgSecoundary"
  | "bgTertiary"
  | "bgQuaternary"
  | "bgQuinary"
  | "textPrimary"
  | "textSecoundary"
  | "textTertiary"
  | "white"
  | "white100"
  | "white200"
  | "white300"
  | "white400"
  | "white500"
  | "white600"
  | "white700"
  | "white800"
  | "white900"
  | "black"
  | "black100"
  | "black200"
  | "black300"
  | "black400"
  | "black500"
  | "black600"
  | "black700"
  | "black800"
  | "black900";

export type Spacing =
  | "0"
  | "px"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96"
  | null;

// Typography interface
export interface Typography_Type {
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  color?: Colors;
}

// spacing interface
export interface Spacing_Type {
  mgTop?: Spacing;
  mgBottom?: Spacing;
  mgLeft?: Spacing;
  mgRight?: Spacing;
}
