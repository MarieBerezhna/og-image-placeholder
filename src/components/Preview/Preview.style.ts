import styled from "styled-components";

export const StyledPreviewContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	min-height: 80vh;
	gap: 1rem;
`;

export const StyledSideForm = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	top: 0;
	right: 0;
	gap: 1.5rem;
	z-index: 1;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 50px;

	@media (min-width: 1200px) {
		position: absolute;
	}
`;
