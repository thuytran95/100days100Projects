/**
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */


type HorizontalPosition = 'left' | 'right' | 'center';
type VericalPosition = 'bottom' | 'center' | 'top'

type ToastProps = {
	position: Exclude<`${HorizontalPosition}-${VericalPosition}`,'center-center'> | 'center'
}

export const Toast = ({ position }: ToastProps) => {
	return <div>Toast Notification Position - {position}</div>
}