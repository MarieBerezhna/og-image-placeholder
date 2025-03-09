"use client";
// import { Colors } from "@/styles/constants";
import styled from "styled-components";

export const StyledInput = styled.input`
	background-color: #333;
	color: #fff;
	padding: 10px;
	border: none;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	font-size: 16px;
	font-weight: bold;
	transition: background-color 0.3s ease-in-out;

	&:focus {
		outline: none;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	&::placeholder {
		color: #666;
	}
`;
