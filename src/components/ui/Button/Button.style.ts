"use client";
import { Colors } from "@/styles/constants";
import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: #4caf50;
	color: ${Colors.bg};
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
	transition: background-color 0.3s ease-in-out;

	&:hover {
		background-color: #3e8e41;
	}
`;
