import type {CentralPaneName} from '@libs/Navigation/types';
import SCREENS from '@src/SCREENS';

const CENTRAL_PANE_TO_RHP_MAPPING: Partial<Record<CentralPaneName, string[]>> = {
    [SCREENS.WORKSPACE.OVERVIEW]: [SCREENS.WORKSPACE.NAME, SCREENS.WORKSPACE.CURRENCY],
    [SCREENS.WORKSPACE.REIMBURSE]: [SCREENS.WORKSPACE.RATE_AND_UNIT.ROOT, SCREENS.WORKSPACE.RATE_AND_UNIT.RATE, SCREENS.WORKSPACE.RATE_AND_UNIT.UNIT],
    [SCREENS.WORKSPACE.MEMBERS]: [SCREENS.WORKSPACE.INVITE, SCREENS.WORKSPACE.INVITE_MESSAGE],
};

export default CENTRAL_PANE_TO_RHP_MAPPING;
