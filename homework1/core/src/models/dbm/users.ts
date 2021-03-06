import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
} from 'typeorm'

@Entity({ name: 'users' })
	
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string
	@Column()
	firstName: string
	@Column()
	lastName: string
}		
