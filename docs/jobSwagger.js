/**
 * @swagger
 * /api/companies/{companyId}/jobs:
 *   get:
 *     summary: Get jobs by company
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     responses:
 *       200:
 *         description: Company jobs fetched successfully
 */

/**
 * @swagger
 * /api/companies/{companyId}/jobs:
 *   post:
 *     summary: Create new job for company
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *         description: Company ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: Full Stack Developer
 *               description:
 *                 type: string
 *                 example: Looking for an experienced MERN Stack Developer.
 *               min_salary:
 *                 type: number
 *                 example: 500000
 *               max_salary:
 *                 type: number
 *                 example: 800000
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - JavaScript
 *                   - React
 *                   - Node.js
 *                   - MongoDB
 *               experience:
 *                 type: string
 *                 example: 2-4 Years
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Develop REST APIs
 *                   - Write clean code
 *                   - Collaborate with frontend team
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Backend Development
 *                   - API Integration
 *               benefits:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Health Insurance
 *                   - Flexible Working Hours
 *                   - Paid Leaves
 *     responses:
 *       201:
 *         description: Job created successfully
 *       404:
 *         description: Company not found
 */

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Get all jobs
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: Jobs fetched successfully
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   get:
 *     summary: Get single job
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job fetched successfully
 *       404:
 *         description: Job not found
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   put:
 *     summary: Update job
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Senior Full Stack Developer
 *               description:
 *                 type: string
 *                 example: Updated job description.
 *               min_salary:
 *                 type: number
 *                 example: 700000
 *               max_salary:
 *                 type: number
 *                 example: 1200000
 *               skills:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - React
 *                   - Node.js
 *                   - Express.js
 *                   - MongoDB
 *               experience:
 *                 type: string
 *                 example: 3-5 Years
 *               responsibilities:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Lead development team
 *                   - Code review
 *                   - Design APIs
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Team Lead
 *                   - Full Stack Development
 *               benefits:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Health Insurance
 *                   - Work From Home
 *                   - Annual Bonus
 *     responses:
 *       200:
 *         description: Job updated successfully
 *       404:
 *         description: Job not found
 */

/**
 * @swagger
 * /api/jobs/{id}:
 *   delete:
 *     summary: Delete job
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     responses:
 *       200:
 *         description: Job deleted successfully
 *       404:
 *         description: Job not found
 */