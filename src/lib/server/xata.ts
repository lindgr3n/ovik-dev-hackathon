// Generated by Xata Codegen 0.18.0. Please do not edit.
import {
	type BaseClientOptions,
	buildClient,
	type SchemaInference,
	type XataRecord
} from '@xata.io/client';

const tables = [
	{
		name: 'user',
		columns: [
			{ name: 'email', type: 'email', unique: true },
			{ name: 'first_name', type: 'string' },
			{ name: 'last_name', type: 'string' },
			{ name: 'role', type: 'string' }
		]
	},
	{
		name: 'one_time_password',
		columns: [
			{ name: 'user_id', type: 'string' },
			{ name: 'token', type: 'string', notNull: true, defaultValue: '' },
			{ name: 'expires_at', type: 'datetime' },
			{ name: 'kind', type: 'string' }
		]
	},
	{
		name: 'schedule',
		columns: [
			{ name: 'title', type: 'string' },
			{ name: 'description', type: 'string' },
			{ name: 'date', type: 'datetime' },
			{ name: 'duration', type: 'datetime' }
		]
	}
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type User = InferredTypes['user'];
export type UserRecord = User & XataRecord;

export type OneTimePassword = InferredTypes['one_time_password'];
export type OneTimePasswordRecord = OneTimePassword & XataRecord;

export type Schedule = InferredTypes['schedule'];
export type ScheduleRecord = Schedule & XataRecord;

export type DatabaseSchema = {
	user: UserRecord;
	one_time_password: OneTimePasswordRecord;
	schedule: ScheduleRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
	databaseURL: 'https://lindgr3n-lhrlkl.eu-west-1.xata.sh/db/ovik-dev-hackathon'
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
	constructor(options?: BaseClientOptions) {
		super({ ...defaultOptions, ...options }, tables);
	}
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
	if (instance) return instance;

	instance = new XataClient();
	return instance;
};
