package com.kelly;
import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet(urlPatterns = "/convert")

public class Converter extends HttpServlet {
    private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        req.getRequestDispatcher("Converter.jsp").forward(req, res);
    }
	
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String conversionType = req.getParameter("conversionType");
        int baseten = Integer.parseInt(req.getParameter("baseten"));
        if ("binary".equals(conversionType)) {
            String result = Integer.toBinaryString(baseten);

            req.setAttribute("baseten", baseten);
            req.setAttribute("result", result);
            req.getRequestDispatcher("Converter.jsp").forward(req, res);
        } else if ("hexa".equals(conversionType)) {
            String result = Integer.toHexString(baseten);

            req.setAttribute("baseten", baseten);
            req.setAttribute("result", result);
            req.getRequestDispatcher("Converter.jsp").forward(req, res);
        } else if ("octal".equals(conversionType)) {
            String result = Integer.toOctalString(baseten);

            req.setAttribute("baseten", baseten);
            req.setAttribute("result", result);
            req.getRequestDispatcher("Converter.jsp").forward(req, res);
        }
    }
}
