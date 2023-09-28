import styled from "styled-components/native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "react-native";

export const SafetyProvider = styled(SafeAreaProvider)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const SaveArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;