---
title: How to Organize and Manage Resources with Starwhale Projects
---

Project is the basic unit for organizing and managing resources (such as models, datasets, runtime environments, etc.). You can create and manage projects based on your needs. For example, you can create projects by business team, product line, or models. One user can create and participate in one or more projects.

## Project type

There are two types of projects：

- **Private project**: The project (and related resources in the project) is only visible to project members with permission. Project members can view or edit the project (as well as associated resources in the project). For more information on roles, please take a look at [Roles and permissions in Starwhale](roles-permissions).

- **Public project**: The project (and related resources in the project) is visible to all Starwhale users. Project members can view or edit the project (as well as associated resources in the project). For more information on roles, please take a look at [Roles and permissions in Starwhale](roles-permissions).

## Create a project

1. Click the **Create** button in the upper right corner of the project list page;
2. Enter a name for the project. Pay attention to avoiding duplicate names. For more information, please see [Names in Starwhale](https://doc.starwhale.ai/docs/concepts/names)
3. Select the **Project Type**, which is defaulted to private project and can be selected as public according to needs;
4. Fill in the description content;
5. To finish, Click the **Submit** button.

## Edit a project

The name, privacy and description  of a project can be edited.

1. Go to the project list page and find the project that needs to be edited by searching for the project name, then click the **Edit Project** button;
2. Edit the items that need to be edited;
3. Click **Submit** to save the edited content;
4. If you're editing multiple projects, repeat steps 1 through 3.

## View a project

**My projects**

On the project list page, only my projects are displayed by default. My projects refer to the projects participated in by the current users as project members or project owners.

**Project sorting**

On the project list page, all projects are supported to be sorted by "Recently visited", "Project creation time from new to old", and "Project creation time from old to new", which can be selected according to your needs.

## Delete a project

Once a project is deleted, all related resources (such as datasets, models, runtimes, evaluations, etc.) will be deleted and cannot be restored.

1. Enter the project list page and search for the project name to find the project that needs to be deleted. Hover your mouse over the project you want to delete, then click the **Delete** button;
2. Follow the prompts, enter the relevant information, click **Confirm** to delete the project, or click **Cancel** to cancel the deletion;
3. If you are deleting multiple projects, repeat the above steps.

## Manage project member

Only users with the admin role can assign people to the project. The project owner defaulted to having the project owner role.

### Add a member

1. Click **Manage Members** to go to the project member list page;
2. Click the **Add Member** button in the upper right corner.
3. Enter the **Username** you want to add, select a **project role** for the user in the project.
4. Click **submit** to complete.
5. If you're adding multiple members, repeat steps 1 through 4.

### Remove a member

1. On the project list page or project overview tab, click **Manage Members** to go to the project member list page.
2. Search for the username you want to delete, then click the **Delete** button.
3. Click **Yes** to delete the user from this project, click **No** to cancel the deletion.
4. If you're removing multiple members, repeat steps 1 through 3.

### Edit a member's role 

1. Hover your mouse over the project you want to edit, then click **Manage Members** to go to the project member list page.
2. Find the username you want to adjust through searching, click the **Project Role** drop-down menu, and select a new project role. For more information on roles, please take a look at [Roles and permissions in Starwhale](roles-permissions).
