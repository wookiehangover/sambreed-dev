declare module "@agentdb/sdk" {
	export class DatabaseService {
		constructor(apiUrl: string, apiKey: string | null);
		connect(token: string | null, database: string, engine: string): DatabaseConnection;
	}

	export interface DatabaseConnection {
		execute(statements: Array<{ sql: string; params?: any[] }>): Promise<{
			results?: Array<{
				rows?: any[];
				error?: string;
				totalRows?: number;
				offset?: number;
				limit?: number;
				changes?: number;
			}>;
		}>;
	}

	export function createVectorBuffer(values: number[]): Buffer | Uint8Array;
}
