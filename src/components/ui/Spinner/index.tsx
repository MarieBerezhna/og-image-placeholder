import { LeoBorder1, LeoBorder2, LeoCore1, LeoCore2, SpinnerBox } from "./Spinner.style";

export default function Spinner() {
	return (
		<SpinnerBox>
			<LeoBorder1>
				<LeoCore1 />
			</LeoBorder1>
			<LeoBorder2>
				<LeoCore2 />
			</LeoBorder2>
		</SpinnerBox>
	);
}
