import { useActions } from '../../context/actions'
import { ZoomTo100MenuItem, ZoomToFitMenuItem, ZoomToSelectionMenuItem } from '../menu-items'
import { TldrawUiMenuItem } from '../menus/TldrawUiMenuItem'

/** @public */
export function DefaultZoomMenuContent() {
	const actions = useActions()
	return (
		<>
			<TldrawUiMenuItem {...actions['zoom-in']} noClose />
			<TldrawUiMenuItem {...actions['zoom-out']} noClose />
			<ZoomTo100MenuItem />
			<ZoomToFitMenuItem />
			<ZoomToSelectionMenuItem />
		</>
	)
}
