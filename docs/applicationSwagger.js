/**
 * @swagger
 * /api/jobs/{jobId}/apply:
 *   post:
 *     summary: Apply for a job
 *     description: Only authenticated users can apply for jobs
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: jobId
 *         required: true
 *         schema:
 *           type: string
 *         description: Job ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               resume:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Job applied successfully
 *       400:
 *         description: Resume missing or already applied
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Job not available
 */


/**
 * @swagger
 * /api/applications:
 *   get:
 *     summary: Get logged-in user's applications
 *     description: Only authenticated users can view their applications
 *     tags: [Applications]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Applications fetched successfully
 *       401:
 *         description: Unauthorized
 */