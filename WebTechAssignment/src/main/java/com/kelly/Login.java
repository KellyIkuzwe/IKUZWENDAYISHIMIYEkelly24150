package com.kelly;

import java.io.*;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

@WebServlet(urlPatterns="/login")
public class Login extends  HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	   public void doPost(HttpServletRequest req, HttpServletResponse res ) throws IOException{
		   PrintWriter out = res.getWriter();
		   
		   String email = req.getParameter("email");
		   String password = req.getParameter("password");
		   
		   if(email.trim() == "") {
		        out.println("enter email");		   
			   }
		   if(password.trim() == "") {
		        out.println("enter password");		   
			   }

		   out.println("This is validated");
		   res.sendRedirect("/WebTechAssignment/Converter.jsp");
	   }

}
