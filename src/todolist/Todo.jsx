export default function Todo({ text, isCompleted, isDeleted = false }) {
	return isDeleted ? null : (
		<li>
			{text} {isCompleted && "✅"}
		</li>
	);
}
