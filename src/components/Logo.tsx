export interface LogoProps {
	size: number;
	fill?: string;
}

export function Logo(props: LogoProps): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="2"
			clipRule="evenodd"
			height={props.size}
			viewBox="0 0 172 138"
		>
			<g transform="translate(-34 -51)">
				<g>
					<g>
						<path
							fill="url(#_Linear1)"
							d="M150.351 90.657c0 16.058-8.857 30.099-21.962 37.444 1.44.144 2.808.216 4.248.216 20.81 0 37.732-16.85 37.732-37.66 0-20.81-16.922-37.732-37.732-37.732-1.44 0-2.808.072-4.248.288 13.105 7.345 21.962 21.314 21.962 37.444z"
						></path>
						<path
							fill="url(#_Linear2)"
							d="M69.703 90.657c0 20.81 16.85 37.66 37.66 37.66 20.81 0 37.731-16.85 37.731-37.66 0-20.81-16.921-37.732-37.731-37.732-20.81 0-37.66 16.922-37.66 37.732z"
						></path>
						<path
							fill="#694D98"
							fillRule="nonzero"
							d="M57.318 187.075c11.953 0 20.738-8.353 20.738-19.802 0-11.378-8.785-19.73-20.738-19.73-11.954 0-20.738 8.352-20.738 19.73 0 11.377 8.784 19.802 20.738 19.802zm0-6.265c-7.777 0-13.538-5.689-13.538-13.537 0-7.849 5.761-13.466 13.538-13.466 7.776 0 13.537 5.617 13.537 13.466 0 7.848-5.761 13.537-13.537 13.537zm54.725-32.763l-12.961 29.667-12.817-29.667H78.56l16.777 38.451h7.057l16.778-38.451h-7.129zm28.371 39.028c11.881 0 20.666-8.353 20.666-19.802 0-11.378-8.785-19.73-20.666-19.73-11.953 0-20.738 8.352-20.738 19.73 0 11.377 8.785 19.802 20.738 19.802zm0-6.265c-7.777 0-13.537-5.689-13.537-13.537 0-7.849 5.76-13.466 13.537-13.466 7.705 0 13.465 5.617 13.465 13.466 0 7.848-5.76 13.537-13.465 13.537zm54.653 5.688h8.353l-17.138-21.242 16.13-17.209h-7.993l-19.01 19.73v-19.73h-7.128v38.451h7.128v-9.793l6.121-6.264 13.537 16.057z"
						></path>
					</g>
				</g>
			</g>
			<defs>
				<linearGradient
					id="_Linear1"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="rotate(179.766 88.308 50.445) scale(34.69839)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#B2A5CD"></stop>
					<stop offset="1" stopColor="#694D98"></stop>
				</linearGradient>
				<linearGradient
					id="_Linear2"
					x1="0"
					x2="1"
					y1="0"
					y2="0"
					gradientTransform="rotate(-165.478 74.13 40.992) scale(58.5898)"
					gradientUnits="userSpaceOnUse"
				>
					<stop offset="0" stopColor="#B2A5CD"></stop>
					<stop offset="1" stopColor="#694D98"></stop>
				</linearGradient>
			</defs>
		</svg>
	);
}
