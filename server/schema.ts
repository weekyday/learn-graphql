import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const departments = sqliteTable('departments', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
});

export const companies = sqliteTable('companies', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	departmentId: text('department_id').references(() => departments.id),
});

export const employees = sqliteTable('employees', {
	id: text('id').primaryKey(),
	name: text('name').notNull(),
	role: text('role').notNull(),
	companyId: text('company_id').references(() => companies.id),
});

export const departmentCompanyRelations = relations(departments, ({ many }) => ({
	companies: many(companies),
}));

export const companyDepartmentRelations = relations(companies, ({ one }) => ({
	department: one(departments, { fields: [companies.departmentId], references: [departments.id] }),
}));

export const companyEmployeeRelations = relations(companies, ({ many }) => ({
	employees: many(employees),
}));

export const employeeCompanyRelations = relations(employees, ({ one }) => ({
	company: one(companies, { fields: [employees.companyId], references: [companies.id] }),
}));
