import type { ScheduleRecord } from '$lib/server/xata';
import { xata } from '$lib/server/xataClient';
import type { PageServerLoad, Actions } from './$types';
import { subHours } from 'date-fns';

export const load: PageServerLoad = async function (event) {
	const schedule: Array<ScheduleRecord> = await await xata.db.schedule.getAll();

	const schedule_friday: Array<ScheduleRecord> = schedule.filter((item) => {
		if (!item.date) return;
		return subHours(item.date, 2).getDate() === 5;
	});
	const schedule_saturday: Array<ScheduleRecord> = schedule.filter((item) => {
		if (!item.date) return;
		return subHours(item.date, 2).getDate() === 6;
	});
	const schedule_sunday: Array<ScheduleRecord> = schedule.filter((item) => {
		if (!item.date) return;
		return subHours(item.date, 2).getDate() === 7;
	});

	return { friday: schedule_friday, saturday: schedule_saturday, sunday: schedule_sunday };
};

export const actions: Actions = {
	default: async (event) => {
		return {};
	}
};
